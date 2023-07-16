//customize image link
function getImgSource(pdfSource) {
  const configStr = "w_400,h_600,c_fill,b_auto,pg_1,c_pad";
  const start = pdfSource.indexOf("upload/") + 7;
  // add config
  const configedIMG = pdfSource
    .slice(0, start)
    .concat(configStr, "/", pdfSource.slice(start, -4), ".png");
  return configedIMG;
}

module.exports = { getImgSource };
