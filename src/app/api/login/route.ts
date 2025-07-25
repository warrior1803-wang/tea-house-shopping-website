import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const usersFile = path.join(process.cwd(), 'src/app/api/users.json');

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  let users: User[] = [];
  try {
    const data = await fs.readFile(usersFile, 'utf-8');
    users = JSON.parse(data);
  } catch {
    users = [];
  }
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    return NextResponse.json({ success: false, message: 'Invalid email or password.' }, { status: 401 });
  }
  return NextResponse.json({ success: true, user: { id: user.id, name: user.name, email: user.email } });
} 