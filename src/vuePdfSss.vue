<style src="./annotationLayer.css"></style>
<script>
    import componentFactory from './componentFactory'
    import pdfjsWrapper from './pdfjsWrapper'

    var PDFJS = require('pdfjs-dist/legacy/build/pdf.js');

    if (process.env.VUE_ENV !== 'server') {
        if (typeof window !== 'undefined' && 'Worker' in window) {
            var PdfjsWorker = require('pdfjs-dist/legacy/build/pdf.worker.entry');
            PDFJS.GlobalWorkerOptions.workerSrc = PdfjsWorker;
            PDFJS.GlobalWorkerOptions.isEvalSupported = false;
        }
    }

    var component = componentFactory(pdfjsWrapper(PDFJS));
    component.PDFJS = PDFJS;

    export default component;
</script>
