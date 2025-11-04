<style src="./annotationLayer.css"></style>
<script>
    import componentFactory from './componentFactory.js'

    let component;

    if (process.env.VUE_ENV !== 'server') {
        const pdfjsWrapper = require('./pdfjsWrapper.js').default;
        const PDFJS = require('pdfjs-dist/legacy/build/pdf.js');
        const PdfjsWorker = require('pdfjs-dist/legacy/build/pdf.worker.entry');

        PDFJS.GlobalWorkerOptions.workerSrc = PdfjsWorker;
        PDFJS.GlobalWorkerOptions.isEvalSupported = false; // 可选：禁用 eval 增强安全性

        component = componentFactory(pdfjsWrapper(PDFJS));
        component.PDFJS = PDFJS;
    } else {
        component = componentFactory({});
    }

    export default component;
</script>
