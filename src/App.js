import React,{useState} from 'react';
import { PDFDownloadLink, Document, Page,Image} from '@react-pdf/renderer'
import MyDoc from "./MyDoc"
import './App.css';
const shortid = require("shortid");
const QRCode = require("qrcode");

// const styles = StyleSheet.create({
//   body: {
//     paddingTop: 35,
//     paddingBottom: 65,
//     paddingHorizontal: 35,
//   },
//   title: {
//     fontSize: 24,
//     textAlign: 'center',
//     fontFamily: 'Oswald'
//   },
//   author: {
//     fontSize: 12,
//     textAlign: 'center',
//     marginBottom: 40,
//   },
//   subtitle: {
//     fontSize: 18,
//     margin: 12,
//     fontFamily: 'Oswald'
//   },
//   text: {
//     margin: 12,
//     fontSize: 14,
//     textAlign: 'justify',
//     fontFamily: 'Times-Roman'
//   },
//   image: {
//     marginVertical: 15,
//     marginHorizontal: 100,
//   },
//   header: {
//     fontSize: 12,
//     marginBottom: 20,
//     textAlign: 'center',
//     color: 'grey',
//   },
//   pageNumber: {
//     position: 'absolute',
//     fontSize: 12,
//     bottom: 30,
//     left: 0,
//     right: 0,
//     textAlign: 'center',
//     color: 'grey',
//   },
// });





function App() {



  return (
    <div className="App">
      <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
    </PDFDownloadLink>
    {/* <MyDoc /> */}
    </div>
  );
}

export default App;
