import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    await Ticket.create(body.ticketData);

    return NextResponse.json(
      { message: "Ticket Oluşturuldu." },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Ticket Oluşturulurken hata oluştu." },
      { status: 500 }
    );
  }
}
