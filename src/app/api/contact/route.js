import nodemailer from "nodemailer";

export async function POST(request) {
    try {
      const body = await request.json();
     const { name, email, message } = body;
     
     if(!name || !email || !message){
        return new Response(
            JSON.stringify({error: "All fields are required"}),
            {status: 400}
        );
     }

     const transporter = nodemailer.createTransport({
      service:"gmail",
      auth: {
        user:process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      }
     })

     await transporter.sendMail({
      from:email,
      to: process.env.EMAIL_USER,
       replyTo: email,
      subject: `new contact from ${name}`,
      text : message
     })

    console.log("Contact Form Data:", {name, email, message});

       return new Response(
    JSON.stringify({ success: true }),
    { status: 200 }
  );
    } catch (error) {
      return new Response (
        JSON.stringify({error: "Something went wrong"}),
        {status:500}
      )
    }
}