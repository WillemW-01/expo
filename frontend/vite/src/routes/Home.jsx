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
  Paragraph,
} from "grommet";
import { FormNext, FormDown } from "grommet-icons";
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
    console.log(response);
    let data = await response.json();
    console.log(typeof data);
    if (typeof data === "string") {
      console.log("Parsing...");
      data = JSON.parse(data);
    }
    console.log("Got templates from server:");
    console.log(data);
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
              label="Templates"
              plain
              onClick={() => setShowTemplates((prev) => !prev)}
            />
            {showTemplates ? <FormDown /> : <FormNext />}
          </Heading>
          <Collapsible open={showTemplates}>
            {templateData.length != 0 ? (
              <Grid
                columns={{ size: ["1/4", "1/3"] }}
                gap="medium"
                width="large"
              >
                {templateData.map((value, index) => {
                  return (
                    <div key={index}>
                      <WorkoutCard
                        title={value["name"]}
                        desc={value["description"]}
                        id={value["template_id"]}
                        exercises={value["exercises"]}
                        theme={darkMode}
                      />
                      {/* <ul>
                        {value["exercises"].map((item, index) => {
                          return <li key={index}>{item.name}</li>;
                        })}
                      </ul> */}
                    </div>
                  );
                })}
              </Grid>
            ) : (
              <Paragraph>
                No templates yet! Click the button above to create your first.
              </Paragraph>
            )}
          </Collapsible>
          {showCreateTemplate && (
            <NewTemplate
              toggleShow={setShowCreateTemplate}
              fetchFunction={fetchTemplates}
            />
          )}
        </PageContent>
      </Page>
    </Grommet>
  );
}

export default Home;
