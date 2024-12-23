import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/database/db"
import blogSchema from "@/database/blogSchema"



export async function POST(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
    await connectDB();
    const slug = (await params).slug;
    const body = await req.json();

    //for debugging
    console.log(body.user)
    console.log(body.content)

    try{
        const blog = await blogSchema.findOne({ slug }).orFail()
        const comment = {
            user: body.user,
            content: body.content,
            date: new Date()
        }
        console.log(comment)
        console.log(blog.comments[0])
        blog.comments.push(comment)
        await blog.save()

	    return NextResponse.json('successfully added comment', {status: 200})

    }catch(err){
        console.log(err)
        return NextResponse.json(err, { status: 400 })
    }




    // try{
    //     //const blog = await blogSchema.findOne({ slug }).orFail();
    //     console.log("")
    // }


}