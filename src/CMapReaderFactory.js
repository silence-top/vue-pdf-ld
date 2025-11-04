// cmap-loader.js (for pdfjs-dist@^4.2.67)
import { CMapCompressionType } from 'pdfjs-dist';

/**
 * Custom CMap loader for pdf.js (browser)
 * 
 * @example
 * pdfjsLib.GlobalWorkerOptions.cMapPacked = true;
 * pdfjsLib.GlobalWorkerOptions.cMapUrl = 'cmaps/';
 * pdfjsLib.GlobalWorkerOptions.standardFontDataUrl = 'standard_fonts/';
 */
export default function () {
  this.fetch = function (query) {
    // query.name 是 cmap 名称，例如 "Adobe-Japan1-UCS2"
    return import(
      /* webpackChunkName: "noprefetch-[request]" */
      `./buffer-loader!pdfjs-dist/cmaps/${query.name}.bcmap`
    ).then(function (bcmap) {
      return {
        cMapData: bcmap.default,
        compressionType: CMapCompressionType.BINARY
      };
    });
  };
}
