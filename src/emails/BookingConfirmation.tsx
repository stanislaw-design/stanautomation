import {
  Html, Head, Body, Container, Section, Row, Column,
  Text, Heading, Button, Hr, Preview, Img,
} from "@react-email/components";
import { formatDatePL, buildGoogleCalendarUrl } from "@/lib/emailHelpers";

interface Props {
  booking: {
    first_name: string;
    last_name: string;
    restaurant_name: string;
    meeting_date: string;
    time_slot: string;
  };
}

export default function BookingConfirmation({ booking }: Props) {
  const { first_name, last_name, restaurant_name, meeting_date, time_slot } = booking;
  const dateFormatted = formatDatePL(meeting_date);
  const calendarUrl = buildGoogleCalendarUrl(meeting_date, time_slot, restaurant_name);

  return (
    <Html lang="pl">
      <Head />
      <Preview>Spotkanie potwierdzone — {dateFormatted}, {time_slot}</Preview>
      <Body style={body}>
        <Container style={container}>

          {/* Header */}
          <Section style={header}>
            <Img
              src="https://stanautomation.com/images/stan_automation_logo_transparent.png"
              alt="StanAutomation"
              width={180}
              style={logo}
            />
          </Section>
          <Hr style={divider} />

          {/* Hero */}
          <Section style={heroSection}>
            <div style={checkCircle}>✓</div>
            <Heading style={heroHeading}>Spotkanie potwierdzone</Heading>
            <Text style={heroSubtext}>
              Dzień dobry, Panie/Pani {last_name},
            </Text>
            <Text style={heroSubtext}>
              Spotkanie dotyczące restauracji <strong>{restaurant_name}</strong> zostało zarezerwowane.
            </Text>
          </Section>

          <Hr style={divider} />

          {/* Meeting details */}
          <Section style={detailsSection}>
            <Text style={detailsLabel}>SZCZEGÓŁY SPOTKANIA</Text>
            <div style={detailCard}>

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

              <Hr style={rowDivider} />

              <Row>
                <Column style={iconCol}>
                  <Img src="https://stanautomation.com/images/icons/home.svg" width={18} height={18} alt="" />
                </Column>
                <Column style={labelCol}>
                  <Text style={rowLabel}>Restauracja</Text>
                </Column>
                <Column style={valueCol}>
                  <Text style={rowValue}>{restaurant_name}</Text>
                </Column>
              </Row>

            </div>
          </Section>

          {/* Calendar button */}
          <Section style={{ textAlign: "center", padding: "0 24px 24px" }}>
            <Button href={calendarUrl} style={calendarButton}>
              Dodaj do Google Calendar
            </Button>
          </Section>

          <Hr style={divider} />

          {/* Next steps */}
          <Section style={stepsSection}>
            <Text style={detailsLabel}>CO DALEJ</Text>
            <Text style={stepText}>
              <span style={stepNumber}>1</span> Dostanie Pan/Pani przypomnienie dzień przed spotkaniem
            </Text>
            <Text style={stepText}>
              <span style={stepNumber}>2</span> Godzinę przed spotkaniem wyślemy kolejne przypomnienie
            </Text>
            <Text style={stepText}>
              <span style={stepNumber}>3</span> Pokażemy gotową stronę dla restauracji — zero zobowiązań
            </Text>
          </Section>

          <Hr style={divider} />

          {/* Contact */}
          <Section style={contactSection}>
            <Text style={contactLabel}>Mają Państwo pytania?</Text>
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

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              StanAutomation — Strony internetowe dla restauracji w Trójmieście
            </Text>
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
const heroSection = { padding: "32px 24px 24px", textAlign: "center" as const };
const checkCircle: React.CSSProperties = { width: "48px", height: "48px", borderRadius: "50%", backgroundColor: "#1d4ed8", color: "#ffffff", fontSize: "22px", lineHeight: "48px", textAlign: "center", margin: "0 auto 16px" };
const heroHeading = { color: "#00171f", fontSize: "26px", fontWeight: "700", margin: "0 0 12px" };
const heroSubtext = { color: "#003459", fontSize: "15px", lineHeight: "1.6", margin: "0 0 8px" };
const divider = { borderColor: "#c8e9f7", margin: "0" };
const detailsSection = { padding: "24px 24px 16px" };
const detailsLabel = { color: "#003459", fontSize: "11px", fontWeight: "600", letterSpacing: "1px", textTransform: "uppercase" as const, margin: "0 0 12px" };
const detailCard = { backgroundColor: "#f5fbff", border: "1px solid #c8e9f7", borderRadius: "12px", padding: "0 20px" };
const iconCol: React.CSSProperties = { width: "32px", verticalAlign: "middle", paddingTop: "16px", paddingBottom: "16px" };
const labelCol: React.CSSProperties = { verticalAlign: "middle", paddingTop: "16px", paddingBottom: "16px" };
const valueCol: React.CSSProperties = { verticalAlign: "middle", textAlign: "right", paddingTop: "16px", paddingBottom: "16px" };
const rowLabel: React.CSSProperties = { color: "#64748b", fontSize: "13px", margin: "0", fontWeight: "400" };
const rowValue: React.CSSProperties = { color: "#00171f", fontSize: "15px", margin: "0", fontWeight: "600" };
const rowDivider = { borderColor: "#e8f4fc", margin: "0" };
const calendarButton = { backgroundColor: "#1d4ed8", color: "#ffffff", fontSize: "14px", fontWeight: "600", padding: "12px 28px", borderRadius: "10px", textDecoration: "none", display: "inline-block" };
const stepsSection = { padding: "24px" };
const stepText = { color: "#003459", fontSize: "14px", lineHeight: "1.6", margin: "0 0 12px", display: "flex" as const, alignItems: "flex-start" as const };
const stepNumber: React.CSSProperties = { display: "inline-block", width: "22px", height: "22px", borderRadius: "50%", backgroundColor: "#1d4ed8", color: "#ffffff", fontSize: "11px", fontWeight: "700", textAlign: "center", lineHeight: "22px", marginRight: "10px", flexShrink: 0 };
const contactSection = { padding: "0 24px 24px" };
const contactLabel = { color: "#003459", fontSize: "14px", fontWeight: "600", margin: "0 0 10px" };
const contactRow: React.CSSProperties = { marginBottom: "6px" };
const contactIconCol: React.CSSProperties = { width: "26px", verticalAlign: "middle" };
const contactText: React.CSSProperties = { color: "#003459", fontSize: "14px", margin: "0", verticalAlign: "middle" };
const link = { color: "#1d4ed8", textDecoration: "none" };
const footer = { backgroundColor: "#f5fbff", padding: "16px 24px", borderTop: "1px solid #c8e9f7" };
const footerText = { color: "#003459", fontSize: "12px", margin: "0", opacity: 0.6 };
