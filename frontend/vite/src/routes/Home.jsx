import "./home.css";
import WorkoutCard from "../components/WorkoutCard";
import {
  Heading,
  Page,
  PageContent,
  Box,
  Button,
  Grid,
  DropButton,
  Collapsible,
} from "grommet";
import { useEffect, useState } from "react";
import { Grommet } from "grommet";
import theme from "../grommet-theme.json";
import NewTemplate from "../components/NewTemplate";

function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [showCreateTemplate, setShowCreateTemplate] = useState(false);
  const [templateData, setTemplateData] = useState([]);
  const [showTemplates, setShowTemplates] = useState(true);

  async function fetchTemplates() {
    let response = await fetch("http://127.0.0.1:5173/gym/get-templates");
    let data = await response.json();
    data = JSON.parse(data);
    setTemplateData(data);
  }

  // Loads the data once when the page is rendered
  useEffect(() => {
    fetchTemplates();
  }, []);

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
            <Button
              hoverIndicator
              label="Create new template"
              onMouseUp={() => setShowCreateTemplate(true)}
            />
          </Box>
          <Heading level="2" textAlign="center">
            <Button
              label={showTemplates ? "Templates" : "Templates >"}
              plain
              onClick={() => setShowTemplates((prev) => !prev)}
            />
          </Heading>
          <Collapsible open={showTemplates}>
            <Grid columns={{ size: ["1/4", "1/3"] }} gap="medium" width="large">
              {templateData.map((value, index) => {
                return (
                  <WorkoutCard
                    title={value["name"]}
                    desc={value["description"]}
                    id={value["template_id"]}
                    key={index}
                  />
                );
              })}
            </Grid>
          </Collapsible>
          {showCreateTemplate && (
            <NewTemplate toggleShow={setShowCreateTemplate} />
          )}
        </PageContent>
      </Page>
    </Grommet>
  );
}

export default Home;
