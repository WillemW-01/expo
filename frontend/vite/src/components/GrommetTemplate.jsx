import React from "react";
import {
  Grommet,
  Page,
  Heading,
  PageContent,
  Box,
  Button,
  Grid,
  Card,
  Text,
  Paragraph,
  Layer,
} from "grommet";
import { Deploy } from "grommet-icons";
import theme from "../grommet-theme.json";

export default () => {
  const [layer, setLayer] = React.useState();
  return (
    <Grommet full theme={theme}>
      <Page fill="vertical">
        <Heading textAlign="center" level="1">
          Rented Fitness
        </Heading>
        <PageContent align="center" justify="center">
          <Box
            align="center"
            justify="center"
            direction="row"
            pad="xsmall"
            gap="medium"
          >
            <Button label="Toggle Theme" hoverIndicator size="medium" />
            <Button label="Start Empty Workout" />
            <Button label="Create New Template" />
          </Box>
          <Heading level="2" textAlign="center">
            Templates
          </Heading>
          <Grid
            columns={{ size: ["1/4", "1/3"] }}
            gap="medium"
            align="center"
            alignContent="center"
            width="large"
          >
            <Card
              direction="column"
              justify="start"
              align="center"
              pad="small"
              overflow="auto"
              background={{ color: "background-front" }}
              border={{ color: "active" }}
              hoverIndicator
              onClick={() => {
                setLayer(layer ? undefined : 55);
              }}
            >
              <Box align="center" justify="center" gap="none" basis="auto">
                <Heading
                  level="3"
                  textAlign="center"
                  margin={{ bottom: "xsmall" }}
                  size="small"
                >
                  Full Body 1
                </Heading>
                <Text textAlign="center" size="small">
                  Last Performed: 2023/11/12
                </Text>
                <Paragraph>
                  This is a short description of the workout.
                </Paragraph>
              </Box>
              {layer === 55 && (
                <Layer
                  animate
                  modal
                  position="center"
                  margin="none"
                  onClickOutside="hide"
                >
                  <Box align="center" justify="center" pad="medium">
                    <Box
                      align="center"
                      justify="center"
                      gap="none"
                      basis="auto"
                    >
                      <Heading
                        level="3"
                        textAlign="center"
                        size="small"
                        margin="none"
                      >
                        Fully Body 1
                      </Heading>
                      <Text textAlign="center" size="small">
                        Last Performed: 2023/11/12
                      </Text>
                    </Box>
                    <Paragraph margin="small">
                      This is a short description of the workout.
                    </Paragraph>
                    <Box
                      align="center"
                      justify="center"
                      pad="xsmall"
                      fill="horizontal"
                      gap="small"
                      overflow="scroll"
                    >
                      <Card
                        direction="row"
                        fill="horizontal"
                        gap="medium"
                        pad="small"
                        hoverIndicator={false}
                        flex
                      >
                        <Deploy />
                        <Text>Exercise 1</Text>
                        <Text textAlign="end">4x4</Text>
                      </Card>
                      <Card
                        direction="row"
                        fill="horizontal"
                        gap="medium"
                        pad="small"
                        hoverIndicator={false}
                        flex
                      >
                        <Deploy />
                        <Text>Exercise 1</Text>
                        <Text textAlign="end">4x4</Text>
                      </Card>
                      <Card
                        direction="row"
                        fill="horizontal"
                        gap="medium"
                        pad="small"
                        hoverIndicator={false}
                        flex
                      >
                        <Deploy />
                        <Text>Exercise 1</Text>
                        <Text textAlign="end">4x4</Text>
                      </Card>
                      <Card
                        direction="row"
                        fill="horizontal"
                        gap="medium"
                        pad="small"
                        hoverIndicator={false}
                        flex
                      >
                        <Deploy />
                        <Text>Exercise 1</Text>
                        <Text textAlign="end">4x4</Text>
                      </Card>
                      <Card
                        direction="row"
                        fill="horizontal"
                        gap="medium"
                        pad="small"
                        hoverIndicator={false}
                        flex
                      >
                        <Deploy />
                        <Text>Exercise 1</Text>
                        <Text textAlign="end">4x4</Text>
                      </Card>
                    </Box>
                  </Box>
                </Layer>
              )}
            </Card>
            <Card
              direction="column"
              justify="start"
              align="center"
              pad="small"
              overflow="auto"
              background={{ color: "background-front" }}
              border={{ color: "active" }}
              hoverIndicator
              onClick={() => {
                setLayer(layer ? undefined : 104);
              }}
            >
              <Box align="center" justify="center" gap="none" basis="auto">
                <Heading
                  level="3"
                  textAlign="center"
                  margin={{ bottom: "xsmall" }}
                  size="small"
                >
                  Full Body 2
                </Heading>
                <Text textAlign="center" size="small">
                  Last Performed: 2023/11/12
                </Text>
                <Paragraph>
                  This is a short description of the workout.
                </Paragraph>
              </Box>
              {layer === 104 && (
                <Layer
                  animate
                  modal
                  position="center"
                  margin="none"
                  onClickOutside="hide"
                >
                  <Box align="center" justify="center" pad="medium">
                    <Box
                      align="center"
                      justify="center"
                      gap="none"
                      basis="auto"
                    >
                      <Heading
                        level="3"
                        textAlign="center"
                        size="small"
                        margin="none"
                      >
                        Fully Body 1
                      </Heading>
                      <Text textAlign="center" size="small">
                        Last Performed: 2023/11/12
                      </Text>
                    </Box>
                    <Paragraph margin="small">
                      This is a short description of the workout.
                    </Paragraph>
                    <Box
                      align="center"
                      justify="center"
                      pad="xsmall"
                      fill="horizontal"
                      gap="small"
                      overflow="scroll"
                    >
                      <Card
                        direction="row"
                        fill="horizontal"
                        gap="medium"
                        pad="small"
                        hoverIndicator={false}
                        flex
                      >
                        <Deploy />
                        <Text>Exercise 1</Text>
                        <Text textAlign="end">4x4</Text>
                      </Card>
                      <Card
                        direction="row"
                        fill="horizontal"
                        gap="medium"
                        pad="small"
                        hoverIndicator={false}
                        flex
                      >
                        <Deploy />
                        <Text>Exercise 1</Text>
                        <Text textAlign="end">4x4</Text>
                      </Card>
                      <Card
                        direction="row"
                        fill="horizontal"
                        gap="medium"
                        pad="small"
                        hoverIndicator={false}
                        flex
                      >
                        <Deploy />
                        <Text>Exercise 1</Text>
                        <Text textAlign="end">4x4</Text>
                      </Card>
                      <Card
                        direction="row"
                        fill="horizontal"
                        gap="medium"
                        pad="small"
                        hoverIndicator={false}
                        flex
                      >
                        <Deploy />
                        <Text>Exercise 1</Text>
                        <Text textAlign="end">4x4</Text>
                      </Card>
                      <Card
                        direction="row"
                        fill="horizontal"
                        gap="medium"
                        pad="small"
                        hoverIndicator={false}
                        flex
                      >
                        <Deploy />
                        <Text>Exercise 1</Text>
                        <Text textAlign="end">4x4</Text>
                      </Card>
                    </Box>
                  </Box>
                </Layer>
              )}
            </Card>
            <Card
              direction="column"
              justify="start"
              align="center"
              pad="small"
              overflow="auto"
              background={{ color: "background-front" }}
              border={{ color: "active" }}
              hoverIndicator
              onClick={() => {
                setLayer(layer ? undefined : 136);
              }}
            >
              <Box align="center" justify="center" gap="none" basis="auto">
                <Heading
                  level="3"
                  textAlign="center"
                  margin={{ bottom: "xsmall" }}
                  size="small"
                >
                  Full Body 3
                </Heading>
                <Text textAlign="center" size="small">
                  Last Performed: 2023/11/12
                </Text>
                <Paragraph>
                  This is a short description of the workout.
                </Paragraph>
              </Box>
              {layer === 136 && (
                <Layer
                  animate
                  modal
                  position="center"
                  margin="none"
                  onClickOutside="hide"
                >
                  <Box align="center" justify="center" pad="medium">
                    <Box
                      align="center"
                      justify="center"
                      gap="none"
                      basis="auto"
                    >
                      <Heading
                        level="3"
                        textAlign="center"
                        size="small"
                        margin="none"
                      >
                        Fully Body 1
                      </Heading>
                      <Text textAlign="center" size="small">
                        Last Performed: 2023/11/12
                      </Text>
                    </Box>
                    <Paragraph margin="small">
                      This is a short description of the workout.
                    </Paragraph>
                    <Box
                      align="center"
                      justify="center"
                      pad="xsmall"
                      fill="horizontal"
                      gap="small"
                      overflow="scroll"
                    >
                      <Card
                        direction="row"
                        fill="horizontal"
                        gap="medium"
                        pad="small"
                        hoverIndicator={false}
                        flex
                      >
                        <Deploy />
                        <Text>Exercise 1</Text>
                        <Text textAlign="end">4x4</Text>
                      </Card>
                      <Card
                        direction="row"
                        fill="horizontal"
                        gap="medium"
                        pad="small"
                        hoverIndicator={false}
                        flex
                      >
                        <Deploy />
                        <Text>Exercise 1</Text>
                        <Text textAlign="end">4x4</Text>
                      </Card>
                      <Card
                        direction="row"
                        fill="horizontal"
                        gap="medium"
                        pad="small"
                        hoverIndicator={false}
                        flex
                      >
                        <Deploy />
                        <Text>Exercise 1</Text>
                        <Text textAlign="end">4x4</Text>
                      </Card>
                      <Card
                        direction="row"
                        fill="horizontal"
                        gap="medium"
                        pad="small"
                        hoverIndicator={false}
                        flex
                      >
                        <Deploy />
                        <Text>Exercise 1</Text>
                        <Text textAlign="end">4x4</Text>
                      </Card>
                      <Card
                        direction="row"
                        fill="horizontal"
                        gap="medium"
                        pad="small"
                        hoverIndicator={false}
                        flex
                      >
                        <Deploy />
                        <Text>Exercise 1</Text>
                        <Text textAlign="end">4x4</Text>
                      </Card>
                    </Box>
                  </Box>
                </Layer>
              )}
            </Card>
          </Grid>
        </PageContent>
      </Page>
    </Grommet>
  );
};
