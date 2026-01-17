const ExcelUtil = require('./ExcelUtil');

const filePath = '/PlayWright/Excel/download.xlsx';

(async () => {
  const season = await ExcelUtil.getCellValue(
    filePath,
    'Sheet1',
    2,
    5
  );
  console.log('Season value:', season);

  await ExcelUtil.updateColumnValueByKey(
    filePath,
    'Sheet1',
    'Mango',
    'fruit_name',
    'season',
    'rainy2'
  );
})();
