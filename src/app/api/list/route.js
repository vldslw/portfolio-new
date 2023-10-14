import { NextResponse } from 'next/server';
import clientPromise from '../../../../lib/mongodb';

export async function GET(request) {
  try {
    const mongoClient = await clientPromise;
    const db = mongoClient.db("sample_restaurants");
    const collection = db.collection("restaurants");
    const results = await collection
    .find({})
    .project({
      grades: 0,
      borough: 0,
      restaurant_id: 0,
    })
    .limit(10)
    .toArray();
    return NextResponse.json({results}, { status: 200 })
  } catch(e) {
    console.log(e);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}