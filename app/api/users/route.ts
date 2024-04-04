import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request){
    try{
        const users = await prisma.user.findMany();
        return new Response(JSON.stringify({resStatus: true, resMsg: users}), {
            headers: {'Content-Type': 'application/json'}
        });
    }
    catch(err){
        return new Response(JSON.stringify({resStatus: false, resMsg: err}));
    }
}

export async function POST(req: Request){
    try{
        const body = await req.json();
        const names = body?.names;
        if(!names){
            return new Response(JSON.stringify({resStatus: false, resMsg: "Names is required please!"}));
        }
        const newUser = await prisma.user.create({
            data: {
                names
            }
        });
        return new Response(JSON.stringify({resStatus: true, resMsg: newUser}),
        { headers: { 'Content-Type': 'application/json'}});
    }
    catch(err){
        return new Response(JSON.stringify({resStatus: false, resMsg: "User not added, error occured!"}));
    }
}