import { prisma } from '@/lib/prisma';

// Tipo do body
type CreateUserBody = {
  name: string;
  email: string;
};

// GET → listar usuários
export async function GET() {
  const users = await prisma.user.findMany();
  return Response.json(users);
}

// POST → criar usuário
export async function POST(req: Request) {
  const body: Partial<CreateUserBody> = await req.json();

  // validação básica
  if (!body.name || !body.email) {
    return Response.json(
      { error: 'Missing fields' },
      { status: 400 }
    );
  }

  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return Response.json(user, { status: 201 });
}