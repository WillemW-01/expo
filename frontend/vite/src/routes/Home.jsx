import "./home.css";
import WorkoutCard from "../components/WorkoutCard";
import { Heading, Page, PageContent, Box, Button, Grid } from "grommet";
import { useState } from "react";
import { Grommet } from "grommet";
import theme from "../grommet-theme.json";

function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Grommet full theme={theme} themeMode={darkMode ? "dark" : "light"}>
      <Page fill="vertical" align="center">
        <Heading level="1">Rented Fitness</Heading>
        <PageContent align="center">
          <Box align="center" direction="row" justify="center" gap="medium">
            <Button
              hoverIndicator
              label="Toggle theme"
              onClick={() => setDarkMode(!darkMode)}
            ></Button>
            <Button hoverIndicator label="Start empty workout" />
            <Button hoverIndicator label="Create new template" />
          </Box>
          <Heading level="2" textAlign="center">
            Template workouts
          </Heading>
          <Grid columns={{ size: ["1/4", "1/3"] }} gap="medium" width="large">
            <WorkoutCard
              title="Full body 1"
              desc="Full body workout day 1"
              lastPerformed="2023/11/02"
            />
            <WorkoutCard
              title="Full body 2"
              desc="This is a short description."
            />
            <WorkoutCard
              title="Full body 3"
              desc="This is supposed to be a multiline description"
            />
            <WorkoutCard title="Arms" desc="One-word description" />
          </Grid>
        </PageContent>
      </Page>
    </Grommet>
  );
}

export default Home;
