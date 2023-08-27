import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';


export async function GET() {
  const prisma = new PrismaClient();
  const result = await prisma.issue.findMany();
  return NextResponse.json(result);
}
