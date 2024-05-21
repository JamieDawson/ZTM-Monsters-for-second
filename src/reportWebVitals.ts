import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

type PerfEntryHandler = (entry: PerformanceEntry) => void;

const reportWebVitals = (onPerfEntry?: PerfEntryHandler): void => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;