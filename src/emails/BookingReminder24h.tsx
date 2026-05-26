import {
  Html, Head, Body, Container, Section, Row, Column,
  Text, Heading, Hr, Preview, Img,
} from "@react-email/components";
import { formatDatePL } from "@/lib/emailHelpers";

interface Props {
  booking: {
    last_name: string;
    restaurant_name: string;
    meeting_date: string;
    time_slot: string;
  };
}

export default function BookingReminder24h({ booking }: Props) {
  const { last_name, restaurant_name, meeting_date, time_slot } = booking;
  const dateFormatted = formatDatePL(meeting_date);

  return (
    <Html lang="pl">
      <Head />
      <Preview>Jutro o {time_slot} — spotkanie ze StanAutomation</Preview>
      <Body style={body}>
        <Container style={container}>

          <Section style={header}>
            <Img
              src="https://stanautomation.com/images/stan_automation_logo_transparent.png"
              alt="StanAutomation"
              width={180}
              style={logo}
            />
          </Section>
          <Hr style={divider} />

          <Section style={mainSection}>
            <Text style={reminderBadge}>⏰ Przypomnienie</Text>
            <Heading style={heading}>Jutro mają Państwo spotkanie</Heading>
            <Text style={subtext}>Dzień dobry, Panie/Pani {last_name},</Text>
            <Text style={subtext}>
              Przypominamy o jutrzejszym spotkaniu dotyczącym restauracji <strong>{restaurant_name}</strong>.
            </Text>
          </Section>

          <div style={detailBox}>
            <Row>
              <Column style={iconCol}>
                <Img src="https://stanautomation.com/images/icons/calendar.svg" width={18} height={18} alt="" />
              </Column>
              <Column style={labelCol}>
                <Text style={rowLabel}>Data</Text>
              </Column>
              <Column style={valueCol}>
                <Text style={rowValue}>{dateFormatted}</Text>
              </Column>
            </Row>
            <Hr style={rowDivider} />
            <Row>
              <Column style={iconCol}>
                <Img src="https://stanautomation.com/images/icons/clock.svg" width={18} height={18} alt="" />
              </Column>
              <Column style={labelCol}>
                <Text style={rowLabel}>Godzina</Text>
              </Column>
              <Column style={valueCol}>
                <Text style={rowValue}>{time_slot}</Text>
              </Column>
            </Row>
          </div>

          <Hr style={divider} />

          <Section style={contactSection}>
            <Text style={contactLabel}>Pytania? Piszą lub dzwonią Państwo śmiało:</Text>
            <Row style={contactRow}>
              <Column style={contactIconCol}>
                <Img src="https://stanautomation.com/images/icons/mail.svg" width={16} height={16} alt="" />
              </Column>
              <Column>
                <Text style={contactText}>
                  <a href="mailto:stanislaw@stanautomation.com" style={link}>stanislaw@stanautomation.com</a>
                </Text>
              </Column>
            </Row>
            <Row style={contactRow}>
              <Column style={contactIconCol}>
                <Img src="https://stanautomation.com/images/icons/phone.svg" width={16} height={16} alt="" />
              </Column>
              <Column>
                <Text style={contactText}>
                  <a href="tel:+48505753683" style={link}>+48 505 753 683</a>
                </Text>
              </Column>
            </Row>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>StanAutomation — Strony internetowe dla restauracji w Trójmieście</Text>
          </Section>

        </Container>
      </Body>
    </Html>
  );
}

const body = { backgroundColor: "#f5fbff", fontFamily: "Inter, Arial, sans-serif" };
const container = { maxWidth: "560px", margin: "0 auto", backgroundColor: "#ffffff", borderRadius: "16px", overflow: "hidden" as const };
const header = { padding: "28px 32px 20px", textAlign: "center" as const };
const logo = { display: "block", margin: "0 auto" };
const mainSection = { padding: "32px 24px 16px" };
const reminderBadge = { display: "inline-block" as const, backgroundColor: "#fef9c3", color: "#854d0e", fontSize: "12px", fontWeight: "600", padding: "4px 10px", borderRadius: "20px", margin: "0 0 16px" };
const heading = { color: "#00171f", fontSize: "24px", fontWeight: "700", margin: "0 0 16px" };
const subtext = { color: "#003459", fontSize: "15px", lineHeight: "1.6", margin: "0 0 8px" };
const detailBox = { margin: "0 24px 24px", backgroundColor: "#f5fbff", border: "1px solid #c8e9f7", borderRadius: "12px", padding: "0 20px" };
const iconCol: React.CSSProperties = { width: "32px", verticalAlign: "middle", paddingTop: "16px", paddingBottom: "16px" };
const labelCol: React.CSSProperties = { verticalAlign: "middle", paddingTop: "16px", paddingBottom: "16px" };
const valueCol: React.CSSProperties = { verticalAlign: "middle", textAlign: "right", paddingTop: "16px", paddingBottom: "16px" };
const rowLabel: React.CSSProperties = { color: "#64748b", fontSize: "13px", margin: "0", fontWeight: "400" };
const rowValue: React.CSSProperties = { color: "#00171f", fontSize: "15px", margin: "0", fontWeight: "600" };
const rowDivider = { borderColor: "#e8f4fc", margin: "0" };
const divider = { borderColor: "#c8e9f7", margin: "0" };
const contactSection = { padding: "20px 24px" };
const contactLabel = { color: "#003459", fontSize: "14px", fontWeight: "600", margin: "0 0 10px" };
const contactRow: React.CSSProperties = { marginBottom: "6px" };
const contactIconCol: React.CSSProperties = { width: "26px", verticalAlign: "middle" };
const contactText: React.CSSProperties = { color: "#003459", fontSize: "14px", margin: "0", verticalAlign: "middle" };
const link = { color: "#1d4ed8", textDecoration: "none" };
const footer = { backgroundColor: "#f5fbff", padding: "14px 24px", borderTop: "1px solid #c8e9f7" };
const footerText = { color: "#003459", fontSize: "12px", margin: "0", opacity: 0.5 };
