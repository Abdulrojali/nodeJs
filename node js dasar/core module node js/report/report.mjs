
import { error } from 'console';
import process from 'process'

process.report.reportOnFatalError=true;
process.report.reportOnSignal=true;
process.report.reportOnUncaughtException=true;
process.report.reportFileName='sample.json';

function sampleErr(){
    throw new error('ups')
}
sampleErr()