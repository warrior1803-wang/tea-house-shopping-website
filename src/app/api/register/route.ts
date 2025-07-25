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
  const { name, email, password } = await req.json();
  let users: User[] = [];
  try {
    const data = await fs.readFile(usersFile, 'utf-8');
    users = JSON.parse(data);
  } catch {
    // If file doesn't exist, start with empty users
    users = [];
  }
  if (users.find((u) => u.email === email)) {
    return NextResponse.json({ success: false, message: 'Email already registered.' }, { status: 400 });
  }
  const newUser: User = {
    id: users.length ? users[users.length - 1].id + 1 : 1,
    name,
    email,
    password, // In real apps, hash the password!
  };
  users.push(newUser);
  await fs.writeFile(usersFile, JSON.stringify(users, null, 2));
  return NextResponse.json({ success: true, user: { id: newUser.id, name, email } });
} 