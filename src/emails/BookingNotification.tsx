import {
  Html, Head, Body, Container, Section, Text, Heading, Hr, Preview,
} from "@react-email/components";
import { formatDatePL } from "@/lib/emailHelpers";

interface Props {
  booking: {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    restaurant_name: string;
    position: string;
    meeting_date: string;
    time_slot: string;
  };
}

export default function BookingNotification({ booking }: Props) {
  const { first_name, last_name, email, phone, restaurant_name, position, meeting_date, time_slot } = booking;
  const dateFormatted = formatDatePL(meeting_date);

  const rows: [string, string][] = [
    ["Imię i nazwisko", `${first_name} ${last_name}`],
    ["Email", email],
    ["Telefon", phone],
    ["Restauracja", restaurant_name],
    ["Stanowisko", position],
    ["Data", dateFormatted],
    ["Godzina", time_slot],
  ];

  return (
    <Html lang="pl">
      <Head />
      <Preview>Nowe spotkanie: {restaurant_name} — {meeting_date} {time_slot}</Preview>
      <Body style={body}>
        <Container style={container}>

          <Section style={header}>
            <Heading style={heading}>🗓 Nowe spotkanie zarezerwowane</Heading>
            <Text style={subheading}>{restaurant_name} · {dateFormatted} · {time_slot}</Text>
          </Section>

          <Hr style={divider} />

          <Section style={tableSection}>
            {rows.map(([label, value]) => (
              <div key={label} style={tableRow}>
                <Text style={tableLabel}>{label}</Text>
                <Text style={tableValue}>{value}</Text>
              </div>
            ))}
          </Section>

          <Hr style={divider} />

          <Section style={footer}>
            <Text style={footerText}>StanAutomation — powiadomienie wewnętrzne</Text>
          </Section>

        </Container>
      </Body>
    </Html>
  );
}

const body = { backgroundColor: "#f5fbff", fontFamily: "Inter, Arial, sans-serif" };
const container = { maxWidth: "560px", margin: "0 auto", backgroundColor: "#ffffff", borderRadius: "16px", overflow: "hidden" as const };
const header = { backgroundColor: "#00171f", padding: "24px" };
const heading = { color: "#ffffff", fontSize: "20px", fontWeight: "700", margin: "0 0 6px" };
const subheading = { color: "#c8e9f7", fontSize: "14px", margin: "0" };
const divider = { borderColor: "#c8e9f7", margin: "0" };
const tableSection = { padding: "16px 24px" };
const tableRow: React.CSSProperties = { display: "flex", justifyContent: "space-between", borderBottom: "1px solid #f0f9ff", padding: "10px 0" };
const tableLabel = { color: "#003459", fontSize: "13px", fontWeight: "600", margin: "0", minWidth: "140px", opacity: 0.6 };
const tableValue = { color: "#00171f", fontSize: "13px", fontWeight: "500", margin: "0", textAlign: "right" as const };
const footer = { backgroundColor: "#f5fbff", padding: "14px 24px" };
const footerText = { color: "#003459", fontSize: "12px", margin: "0", opacity: 0.5 };
