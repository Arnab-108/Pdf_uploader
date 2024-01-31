import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import styled from 'styled-components';

function PdfComp({ pdffile }) {
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <>
            <DIV className='pdf-div'>
                <p>
                    Page {pageNumber} of {numPages}
                </p>
                <Document file={pdffile} onLoadSuccess={onDocumentLoadSuccess}>
                    {
                        Array.apply(null, Array(numPages)).map((x, i) => i + 1).map((page) => (
                            <Page pageNumber={page} renderTextLayer={false} renderAnnotationLayer={false} />
                        ))
                    }
                </Document>

            </DIV>
        </>
    );
}

const DIV = styled.div`
    .pdf-div{
        padding:50px;
        background-color: #dedede;
        margin-top: 50px;
    }
    canvas.react-pdf__Page__canvas {
        margin-bottom: 50px;
    }
`

export default PdfComp