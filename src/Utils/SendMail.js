import {HOST , SERVICE , EMAIL_PORT , SECURE , EMAIL_USER , EMAIL_PASS } from  '../../config.js' ;
import nodemailer from 'nodemailer'

const SendMail  = async (email , subject , text) => {
    try {
        const transporter = nodemailer.createTransport({
        host : HOST , 
        service : SERVICE ,
        port : EMAIL_PORT , 
        secure : Boolean(SECURE) ,
        auth : {
            user : EMAIL_USER , 
            pass : EMAIL_PASS
        }
        })
        await transporter.sendMail({
            from : EMAIL_USER , 
            to : email ,
            subject : subject , 
            text : text , 
        })
        console.log("Email sent successfully") ;
    } catch (error) {
        console.log("Email not sent") ;
        console.log(error) ;
    }
}
export default SendMail;