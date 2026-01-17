const ExcelUtil = require('./ExcelUtil');

const filePath = '/PlayWright/Excel/download.xlsx';

(async () => {
    const season = await ExcelUtil.getCellValue(
        filePath,
        'Sheet1',
        2,
        2
    );
    console.log('Season value:', season);

    await ExcelUtil.updateColumnValueByKey(
        filePath,        // WHICH file
        'Sheet1',        // WHICH sheet
        'Papaya',        // WHICH row (business key value)
        'fruit_name',    // WHICH column identifies the row
        'season',        // WHICH column to update
        'rainy2'         // WHAT value to set
    );


    await ExcelUtil.updateCellByPosition(
        filePath,
        'Sheet1',
        5,
        4,
        2000
    )
})();
