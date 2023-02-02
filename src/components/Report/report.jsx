import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { useEffect } from "react";


const reportPDF = (data) =>{
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const totalValue = `R$: ${data.amount.toFixed(2)}`
    const totalhour =  `${data.totalHours} hr`

    const teams = data.formResponses.map((element, index)=>{
        const totalValue = `R$: ${(element.valuePerHour*element.workHours).toFixed(2)}`
        const team = element.alternative !== null ? element.alternative.teams[0].team.name : `dataRain ${index+1}`
        const hours = `${element.workHours} hr`
        const valuePerHour = `R$: ${element.valuePerHour.toFixed(2)}/hr`
        return [
            {text: team, style: 'tableHeader', marginTop: 7, marginLeft: 0, fontSize:11},
            {text: hours, style: 'tableHeader', marginTop: 7, marginLeft: 0, fontSize:11},
            {text: valuePerHour, style: 'tableHeader', marginTop: 7, marginLeft: 0, fontSize:11},
            {text: totalValue, style: 'tableHeader', marginTop: 7, marginLeft: 0, fontSize:11},
        ]
    })

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
                        {text: data.client.mainContact, style: 'tableHeader', fontSize:11,margin: [0, 5, 0, 20]},
                        {text: data.client.companyName, style: 'tableHeader', fontSize:11,margin: [0, 5, 0, 20]},
                        {text: data.client.email, style: 'tableHeader', fontSize:11,margin: [0, 5, 0, 20]},
                        {text: data.client.phone, style: 'tableHeader', fontSize:11,margin: [0, 5, 0, 20]},

                    ],
                    [
                        {text: 'Equipe:', style: 'tableHeader', fontSize:13, marginTop: 10, marginLeft: 0, bold: "true"},
                        {text: 'Horas Totais:', style: 'tableHeader', fontSize:13, marginTop: 10, marginLeft: 0, bold: "true"},
                        {text: 'Valor/hr:', style: 'tableHeader', fontSize:13, marginTop: 10, marginLeft: 0, bold: "true"},
                        {text: 'Valor Total:', style: 'tableHeader', fontSize:13, marginTop: 10, marginLeft: 0, bold: "true"},

                    ],
                    ...teams,
                    // [
                    //     {text: 'Equipe', style: 'tableHeader', marginTop: 7, marginLeft: 80, fontSize:11},
                    //     {text: 'Horas Totais', style: 'tableHeader', marginTop: 7, marginLeft: 40, fontSize:11},
                    //     {text: 'Valor Total', style: 'tableHeader', marginTop: 7, marginLeft: 40, fontSize:11},
                    //     {text: ''},

                    // ],
                    [
                        {text: ''},
                        {text: 'Horas Absolutas:', style: 'tableHeader', fontSize:13, marginTop: 50, bold: "true"},
                        {text: 'Valor Absoluto:', style: 'tableHeader', fontSize:13, marginTop: 50, bold: "true"},
                        {text: ''},

                    ],
                    [
                        {text: ''},
                        {text: totalhour, style: 'tableHeader', fontSize:11, marginTop: 10, marginLeft:30},
                        {text: totalValue, style: 'tableHeader', fontSize:11, marginTop: 10, marginLeft:10},
                        {text: ''},

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