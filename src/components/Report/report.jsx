import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";


const reportPDF = (data) =>{
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const reportTitle = [
        {
            text: "Relatório de orçamento dataRain",
            alignment: "center",
            fontSize: 20,
            bold: true,
            marginBottom: 50,
            marginTop: 10,
        }
    ];

    const details = [
        {
            table:{
                headerRows: 2,
                widths: ['*','*','*','*'],
                body: [
                    [
                        {text: 'Cliente', style: 'tableHeader', fontSize:15, bold: "true"},
                        {text: 'Empresa', style: 'tableHeader', fontSize:15, bold: "true"},
                        {text: 'e-mail', style: 'tableHeader', fontSize:15, bold: "true"},
                        {text: 'Telefone', style: 'tableHeader', fontSize:15, bold: "true"},
                    ],
                    [
                        {text: 'Jurandi', style: 'tableHeader', fontSize:13,margin: [0, 5, 0, 20]},
                        {text: 'Alex corporation', style: 'tableHeader', fontSize:13,margin: [0, 5, 0, 20]},
                        {text: 'babebi@hotmail.com', style: 'tableHeader', fontSize:13,margin: [0, 5, 0, 20]},
                        {text: '22999059574', style: 'tableHeader', fontSize:13,margin: [0, 5, 0, 20]},

                    ],
                    [
                        {text: 'Equipe', style: 'tableHeader', fontSize:10},
                        {text: 'Horas Totais', style: 'tableHeader', fontSize:10},
                        {text: 'Valor Total', style: 'tableHeader', fontSize:10},
                        {text: 'Valor Total', style: 'tableHeader', fontSize:10},

                    ],
                    [
                        {text: 'Equipe', style: 'tableHeader', fontSize:10},
                        {text: 'Horas Totais', style: 'tableHeader', fontSize:10},
                        {text: 'Valor Total', style: 'tableHeader', fontSize:10},
                        {text: 'Valor Total', style: 'tableHeader', fontSize:10},

                    ]
                ]

            },
            layout: "headerLineOnly"
        }
    ];

    // const rodape = [];
    const rodape = (currentPage, pageCount) =>{
        return(
            {
                text: currentPage + "/" +pageCount,
                alignment: "right",
                fontSize: 9,
                bold: false,
                margin: [0, 10, 20, 0]
            }
        )
    }

    const docDefinitions = {
        pageSize: "A4",
        pageMargins: [15, 50, 15, 40],

        header: [reportTitle],
        content: [details],
        footer:[rodape]
    }
    
    pdfMake.createPdf(docDefinitions).download();
}


export default reportPDF