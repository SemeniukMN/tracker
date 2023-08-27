import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';


export async function POST(request: NextRequest) {
  const issue = await request.json();
  const prisma = new PrismaClient();
  const result = await prisma.issue.create({data: issue});
  return NextResponse.json(result);
}
