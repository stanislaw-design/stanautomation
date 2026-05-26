import {
  Html, Head, Body, Container, Section, Row, Column,
  Text, Heading, Hr, Preview, Img,
} from "@react-email/components";

interface Props {
  booking: {
    last_name: string;
    restaurant_name: string;
    time_slot: string;
  };
}

export default function BookingReminder1h({ booking }: Props) {
  const { last_name, restaurant_name, time_slot } = booking;

  return (
    <Html lang="pl">
      <Head />
      <Preview>Za godzinę — {time_slot} — spotkanie ze StanAutomation</Preview>
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
            <Text style={urgentBadge}>🔔 Za godzinę</Text>
            <Heading style={heading}>Spotkanie o {time_slot}</Heading>
            <Text style={subtext}>Dzień dobry, Panie/Pani {last_name},</Text>
            <Text style={subtext}>
              Za godzinę zaczyna się Państwa spotkanie ze StanAutomation
              dotyczące restauracji <strong>{restaurant_name}</strong>.
            </Text>
            <Text style={subtext}>
              Odezwiemy się w ciągu kilku minut.
            </Text>
          </Section>

          <Hr style={divider} />

          <Section style={contactSection}>
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
const mainSection = { padding: "32px 24px 24px" };
const urgentBadge = { display: "inline-block" as const, backgroundColor: "#fef3c7", color: "#92400e", fontSize: "12px", fontWeight: "600", padding: "4px 10px", borderRadius: "20px", margin: "0 0 16px" };
const heading = { color: "#00171f", fontSize: "26px", fontWeight: "700", margin: "0 0 16px" };
const subtext = { color: "#003459", fontSize: "15px", lineHeight: "1.6", margin: "0 0 8px" };
const divider = { borderColor: "#c8e9f7", margin: "0" };
const contactSection = { padding: "18px 24px" };
const contactRow: React.CSSProperties = { marginBottom: "6px" };
const contactIconCol: React.CSSProperties = { width: "26px", verticalAlign: "middle" };
const contactText: React.CSSProperties = { color: "#003459", fontSize: "14px", margin: "0", verticalAlign: "middle" };
const link = { color: "#1d4ed8", textDecoration: "none" };
const footer = { backgroundColor: "#f5fbff", padding: "14px 24px", borderTop: "1px solid #c8e9f7" };
const footerText = { color: "#003459", fontSize: "12px", margin: "0", opacity: 0.5 };
