import { Box, Button, Chip, Container, CssBaseline, Link, Stack, ThemeProvider, Typography, createTheme } from '@mui/material'
import { motion } from 'motion/react'
import './App.css'

const MotionBox = motion.create(Box)

const highlights = ['Amtsleiter', 'Einsatzleiter', 'Presence']

const storyBlocks = [
  {
    eyebrow: 'Profil',
    title: 'Klar in Haltung, ruhig im Ausdruck',
    text:
      'Eine präsente, reduzierte Außendarstellung mit Fokus auf Substanz. Die Bildsprache bleibt bewusst ruhig, damit Persönlichkeit, Haltung und Arbeitsweise im Vordergrund stehen, statt von Effekten oder dekorativen Elementen überlagert zu werden.',
    tone: 'glacier',
  },
  {
    eyebrow: 'Arbeitsweise',
    title: 'Struktur, die Vertrauen entstehen lässt',
    text:
      'Die digitale Visitenkarte vermittelt einen professionellen Rhythmus: konzentriert, modern und zugänglich. Jede Sektion schafft Orientierung und gibt kleinen Einblick in Denkweise, Zusammenarbeit und den Anspruch, Dinge präzise und verlässlich umzusetzen.',
    tone: 'stone',
  },
  {
    eyebrow: 'Wirkung',
    title: 'Reduktion mit einer klaren Handschrift',
    text:
      'Alpine Minimalism bedeutet hier nicht Kühle, sondern Ruhe mit Charakter. Die Seite bleibt leicht, großzügig und hochwertig, damit sie auf den ersten Blick ein Gefühl für Persönlichkeit, Qualität und digitale Sorgfalt vermittelt.',
    tone: 'forest',
  },
]

const collageTiles = [
  { label: 'Portrait 01', size: 'large' },
  { label: 'Portrait 02', size: 'small' },
  { label: 'Portrait 03', size: 'small' },
]

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2f5d50',
    },
    secondary: {
      main: '#7ea6b7',
    },
    background: {
      default: '#f4f6f1',
      paper: 'rgba(255, 255, 255, 0.72)',
    },
    text: {
      primary: '#10211c',
      secondary: '#486058',
    },
  },
  shape: {
    borderRadius: 24,
  },
  typography: {
    fontFamily: '"Manrope", "Instrument Sans", sans-serif',
    h1: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 600,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 600,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 600,
      letterSpacing: '-0.02em',
    },
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="page-shell">
        <Box className="page-glow page-glow-left" />
        <Box className="page-glow page-glow-right" />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 2, md: 4 } }}>
          <Box component="header">
            <MotionBox
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="hero-card"
            >
              <Box className="hero-image-frame">
                <Box
                  component="img"
                  src="/assets/mountain.PNG"
                  alt="Panoramic alpine mountain landscape"
                  className="hero-image"
                />
                <Box className="hero-overlay" />
                <Stack className="hero-content" spacing={3}>
                  <Chip label="" className="frost-chip" />
                  <Stack spacing={2} sx={{ maxWidth: 680 }}>
                    <Typography variant="h1" sx={{ fontSize: { xs: '3.4rem', md: '5.7rem' }, lineHeight: 0.95 }}>
                      Dominik Pröm
                    </Typography>
                    <Typography variant="h5" sx={{ maxWidth: 560, fontWeight: 500, color: 'rgba(240, 247, 243, 0.9)' }}>
                     Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
                    </Typography>
                  </Stack>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.25}>
                    {highlights.map((item) => (
                      <Chip key={item} label={item} className="hero-tag" />
                    ))}
                  </Stack>
                </Stack>
              </Box>
            </MotionBox>
          </Box>

          <Stack spacing={{ xs: 10, md: 14 }} sx={{ py: { xs: 8, md: 12 } }}>
            <MotionBox
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <Stack spacing={3} sx={{ mb: 5, maxWidth: 680 }}>
                <Typography className="section-kicker">Portrait-Collage</Typography>
                <Typography variant="h2" sx={{ fontSize: { xs: '2.6rem', md: '4rem' }, lineHeight: 0.98 }}>
                  Ich bin Dominik Proem, Amtsleiter in Bartholomäberg und Einsatzleiter beim roten Kreuz.
                </Typography>
              </Stack>

              <Box className="collage-grid">
                {collageTiles.map((tile, index) => (
                  <MotionBox
                    key={tile.label}
                    initial={{ opacity: 0, y: 24, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.08 }}
                    className={`collage-tile ${tile.size}`}
                  >
                    <Box className="portrait-placeholder">
                      <span>{tile.label}</span>
                    </Box>
                  </MotionBox>
                ))}
              </Box>
            </MotionBox>

            <Stack spacing={4.5}>
              {storyBlocks.map((block, index) => {
                const reverse = index % 2 === 1

                return (
                  <MotionBox
                    key={block.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.65, ease: 'easeOut' }}
                  >
                    <Box className={`story-card ${reverse ? 'reverse' : ''}`}>
                      <Box className={`story-image story-image-${block.tone}`}>
                        <Box className="portrait-placeholder portrait-vertical">
                          <span>{`Portrait 0${index + 4}`}</span>
                        </Box>
                      </Box>

                      <Stack className="story-copy" spacing={2.5}>
                        <Typography className="section-kicker">{block.eyebrow}</Typography>
                        <Typography variant="h3" sx={{ fontSize: { xs: '2rem', md: '2.9rem' }, lineHeight: 0.98 }}>
                          {block.title}
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: '1.04rem', lineHeight: 1.85, color: 'text.secondary' }}>
                          {block.text}
                        </Typography>
                      </Stack>
                    </Box>
                  </MotionBox>
                )
              })}
            </Stack>
          </Stack>

          <Box component="footer">
            <MotionBox
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="footer-card"
            >
              <Stack spacing={2} alignItems="center" textAlign="center">
                <Typography className="section-kicker">Connect</Typography>
                <Typography variant="h2" sx={{ fontSize: { xs: '2.2rem', md: '3.25rem' }, lineHeight: 1 }}>
                  LinkedIn
                </Typography>
                <Typography variant="body1" sx={{ maxWidth: 540, color: 'text.secondary', lineHeight: 1.8 }}>
                  Für Austausch, neue Projekte oder eine erste Kontaktaufnahme reicht ein Klick. Der Auftritt bleibt bewusst reduziert, der Zugang dazu nicht.
                </Typography>
                <Button
                  component={Link}
                  href="https://www.linkedin.com/in/dominikproem/"
                  target="_blank"
                  rel="noreferrer"
                  variant="contained"
                  size="large"
                  className="linkedin-button"
                >
                  Zum LinkedIn-Profil
                </Button>
              </Stack>
            </MotionBox>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
