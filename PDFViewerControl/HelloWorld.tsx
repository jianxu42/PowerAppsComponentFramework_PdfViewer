/* eslint-disable no-undef */
import * as React from "react";
import { PDFObject } from "react-pdfobject";
import { Label } from "@fluentui/react";

export interface IHelloWorldProps {
  pdf?: string | null;
}

export class HelloWorld extends React.Component<IHelloWorldProps> {
  public render(): React.ReactNode {
    let { pdf } = this.props;
    if (!pdf) {
      pdf =
        "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
    }
    return (
      <>
        <Label>{pdf}</Label>
        <PDFObject url={pdf} forcePDFJS={true} />
      </>
    );
  }
}
