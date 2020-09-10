import React,{useState,useEffect} from 'react';
import { Document, Page,Image,StyleSheet,View,Text,Link} from '@react-pdf/renderer'
import './App.css';
// import { QRCode } from "react-qr-svg";
const shortid = require("shortid");
const QRCode = require("qrcode");
var base64Img = require('base64-img');

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Oswald'
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: 'Oswald'
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman'
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
    height:100,
    width:100
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});





function MyDoc() {
const [imageUrl,setImageUrl] = useState("")
 

useEffect(()=>{
console.log("1")
    shortid.characters("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@¥");
    const code = shortid.generate();
    const part1 = code.slice(0, 4);
    const part2 = code.slice(4, 8);
    const inviteCode = part1 + "-" + part2;
   QRCode.toDataURL(inviteCode, { errorCorrectionLevel: "H", width:100 }).then(url => {
      console.log("image url ",url)
      setImageUrl(url)
    })
    .catch(err => {
      console.error(err)
    })

},[])
    // firebase will not allow these characters > “.”, “#”, “$”, “/”, “[”, or “]”
   

    console.log("qrCodeImage",imageUrl)

    
 


  return (
    <Document >
         {console.log("MyDoc",imageUrl)}
         <Page 
        style={styles.body}
        >
          {/* <Image source={ {uri: imageUrl} }
          style={{width:100,height:100,position:'absolute',top:26,right:26}}
          /> */}
           <View >
             <Link src={imageUrl}/>
          <Image
              style={styles.image}
              source={imageUrl}
            />
          </View>
        </Page>
      </Document>
//    <QRCode
//    bgColor="#FFFFFF"
//    fgColor="#000000"
//    level="Q"
//    style={{ width: 256 }}
//    value="some text"
// />
// {/* <a href={imageUrl} download>link</a> */}
  );
}

export default MyDoc;
