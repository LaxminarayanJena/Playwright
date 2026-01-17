const ExcelJS = require('exceljs');

class ExcelUtil {

    static async loadWorkbook(filePath) {
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile(filePath);
        return workbook;
    }

    // ---------- READ OPERATIONS ----------

    static async getCellValue(filePath, sheetName, row, col) {
        const workbook = await this.loadWorkbook(filePath);
        const sheet = workbook.getWorksheet(sheetName);

        if (!sheet) throw new Error(`Sheet not found: ${sheetName}`);

        return sheet.getCell(row, col).value;
    }

    static async getRowDataByKey(filePath, sheetName, key, keyColumnName) {
        const workbook = await this.loadWorkbook(filePath);
        const sheet = workbook.getWorksheet(sheetName);

        const headerMap = this.getHeaderMap(sheet);
        const keyCol = headerMap[keyColumnName];

        for (let row = 2; row <= sheet.rowCount; row++) {
            if (sheet.getCell(row, keyCol).value === key) {
                return this.getRowAsObject(sheet, row, headerMap);
            }
        }

        throw new Error(`Key not found: ${key}`);
    }

    // ---------- WRITE OPERATIONS ----------

    static async updateCellValue(filePath, sheetName, row, col, value) {
        const workbook = await this.loadWorkbook(filePath);
        const sheet = workbook.getWorksheet(sheetName);

        sheet.getCell(row, col).value = value;
        await workbook.xlsx.writeFile(filePath);
    }

    static async updateColumnValueByKey(
        filePath,
        sheetName,
        key,
        keyColumnName,
        targetColumnName,
        newValue
    ) {
        const workbook = await this.loadWorkbook(filePath);
        const sheet = workbook.getWorksheet(sheetName);

        const headerMap = this.getHeaderMap(sheet);

        const keyCol = headerMap[keyColumnName];
        const targetCol = headerMap[targetColumnName];

        for (let row = 2; row <= sheet.rowCount; row++) {
            if (sheet.getCell(row, keyCol).value === key) {
                sheet.getCell(row, targetCol).value = newValue;
                await workbook.xlsx.writeFile(filePath);
                return;
            }
        }

        throw new Error(`Key not found: ${key}`);
    }

    static async updateCellByPosition(
        filePath,
        sheetName,
        rowNumber,
        columnNumber,
        newValue
    ) {
        const workbook = await this.loadWorkbook(filePath);
        const sheet = workbook.getWorksheet(sheetName);

        if (!sheet) {
            throw new Error(`Sheet not found: ${sheetName}`);
        }

        if (rowNumber <= 0 || columnNumber <= 0) {
            throw new Error('Row and column numbers must be greater than 0');
        }

        sheet.getCell(rowNumber, columnNumber).value = newValue;

        await workbook.xlsx.writeFile(filePath);
    }

    // ---------- HELPERS ----------

    static getHeaderMap(sheet) {
        const headers = {};
        sheet.getRow(1).eachCell((cell, col) => {
            headers[cell.value] = col;
        });
        return headers;
    }

    static getRowAsObject(sheet, rowNumber, headerMap) {
        const rowData = {};
        for (const header in headerMap) {
            rowData[header] = sheet.getCell(rowNumber, headerMap[header]).value;
        }
        return rowData;
    }
}

module.exports = ExcelUtil;
