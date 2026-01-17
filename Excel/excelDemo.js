//npm init
//npm install exceljs
//node excelDemo.js    
const ExcelJs = require('exceljs');

/*
const workbook = new ExcelJs.Workbook();
//async step below
workbook.xlsx.readFile("/PlayWright/Excel/download.xlsx").then(function()
{

const worksheet =workbook.getWorksheet('Sheet1');

worksheet.eachRow((row,rowNumber) =>
{
    row.eachCell((cell,colNumber) =>
    {
        console.log(cell.value);

    } )

})

})

*/

//////


async function ReadExcelTest() 
{

    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile("/PlayWright/Excel/download.xlsx")
    const worksheet = workbook.getWorksheet('Sheet1');

    worksheet.eachRow((row, rowNumber) => 
    {
        row.eachCell((cell, colNumber) => 
        {
            console.log(cell.value);

        })

    })
}

ReadExcelTest() ;

//---------------------------------------------------write excel----------------------

async function WriteExcelTest() 
{

    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile("/PlayWright/Excel/download.xlsx")
    const worksheet = workbook.getWorksheet('Sheet1');

    worksheet.eachRow((row, rowNumber) => 
    {
        row.eachCell((cell, colNumber) => 
        {
            console.log(cell.value);

        })

    })

    const cell =worksheet.getCell(3,2);
    cell.value ="Iphone2";
    await workbook.xlsx.writeFile("/PlayWright/Excel/download.xlsx");
}

WriteExcelTest()  ;


//---------------------------------------------------write excel without hardcoding----------------------


async function WriteExcelTestWithouthardcoding(searchText,replaceText,filePath) 
{

    let output ={row:-1,column:-1}//-1 is a safe default meaning “not found yet”
    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile(filePath)
    const worksheet = workbook.getWorksheet('Sheet1');

    worksheet.eachRow((row, rowNumber) => 
    {
        row.eachCell((cell, colNumber) => 
        {
            if(cell.value ===searchText)
            {
                output.row =rowNumber;
                output.column=colNumber;

            }
          

        })

    })

    const cell =worksheet.getCell(output.row,output.column);
    cell.value =replaceText;
    await workbook.xlsx.writeFile("/PlayWright/Excel/download.xlsx");
}

WriteExcelTestWithouthardcoding("Banana","rEPUBLIC","/PlayWright/Excel/download.xlsx")  ;