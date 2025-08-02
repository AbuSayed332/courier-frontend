import React from 'react';
import QRCode from 'qrcode.react';
import { useTranslation } from '../context/LanguageContext';

const QRGenerator = ({ trackingId, size = 128 }) => {
  const { t } = useTranslation();
  
  const downloadQR = () => {
    const canvas = document.getElementById("qr-code");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${trackingId}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="qr-generator">
      <h4>{t('tracking_qr_code')}</h4>
      <QRCode
        id="qr-code"
        value={trackingId}
        size={size}
        level={"H"}
        includeMargin={true}
      />
      <button onClick={downloadQR} className="btn-download">
        {t('download_qr')}
      </button>
    </div>
  );
};

export default QRGenerator;