import { NextResponse } from "next/server";
import { supabase } from "../../lib/supabaseClient";

export async function GET() {
  const {data}= await supabase
     .from("posts")
     .select("*")
     .order("id", {ascending: false});
  return NextResponse.json(data); 
}

// export default async function handler(req, res) {
// if(req.method === "GET"){
//    const {data} = await supabase
//      .from("posts")
//      .select("*")
//      .order("id", {ascending: false});
//    res.status(200).json(data); 
// }
// }