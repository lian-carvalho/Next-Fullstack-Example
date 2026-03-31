import { prisma } from '@/lib/prisma';

// Tipo do contexto (params)
type Params = {
  params: {
    id: string;
  };
};

// GET /api/users/1
export async function GET(req: Request, { params }: Params) {
  const data = await params;
  const id = Number(data.id);

  if (isNaN(id)) {
    return Response.json({ error: 'ID inválido' }, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { id },
  });

  if (!user) {
    return Response.json({ error: 'Not found' }, { status: 404 });
  }

  return Response.json(user);
}

// PUT → atualizar
export async function PUT(req: Request, { params }: Params) {
  const data = await params;
  const id = Number(data.id);

  if (isNaN(id)) {
    return Response.json({ error: 'ID inválido' }, { status: 400 });
  }

  const body = await req.json();

  const user = await prisma.user.update({
    where: { id },
    data: body,
  });

  return Response.json(user);
}

// DELETE
export async function DELETE(req: Request, { params }: Params) {
  const data = await params;
  const id = Number(data.id);

  if (isNaN(id)) {
    return Response.json({ error: 'ID inválido' }, { status: 400 });
  }

  await prisma.user.delete({
    where: { id },
  });

  return Response.json({ success: true , message: 'Usuário apagado com sucesso'});
}