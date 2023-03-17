import { NextPage, GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import Header from "@/layouts/Header";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Box, Grid } from "@mui/material";
import { PropertyCard } from "@/modules/Property";
import BestWidth from "@/components/BestWidth";

const Test: NextPage = () => {
  const { t } = useTranslation("title");
  return (
    <>
      <Head>
        <title>{t("indexPage")}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <BestWidth>
          <Grid container spacing={3} sx={{ px: 1, py: 3 }}>
            {Array(10).map((i) => (
              <Grid key={i} item md={3}>
                <PropertyCard />
              </Grid>
            ))}
            <Grid item md={3}>
              <PropertyCard />
            </Grid>
            <Grid item md={3}>
              <PropertyCard />
            </Grid>
            <Grid item md={3}>
              <PropertyCard />
            </Grid>
            <Grid item md={3}>
              <PropertyCard />
            </Grid>
            <Grid item md={3}>
              <PropertyCard />
            </Grid>
            <Grid item md={3}>
              <PropertyCard />
            </Grid>
            <Grid item md={3}>
              <PropertyCard />
            </Grid>
            <Grid item md={3}>
              <PropertyCard />
            </Grid>
            <Grid item md={3}>
              <PropertyCard />
            </Grid>
            <Grid item md={3}>
              <PropertyCard />
            </Grid>
            <Grid item md={3}>
              <PropertyCard />
            </Grid>
            <Grid item md={3}>
              <PropertyCard />
            </Grid>
            <Grid item md={3}>
              <PropertyCard />
            </Grid>
            <Grid item md={3}>
              <PropertyCard />
            </Grid>
            <Grid item md={3}>
              <PropertyCard />
            </Grid>
            <Grid item md={3}>
              <PropertyCard />
            </Grid>
            <Grid item md={3}>
              <PropertyCard />
            </Grid>
          </Grid>
        </BestWidth>
      </Box>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale, [
        "title",
        "common",
        "header",
        "setting",
        "default-error",
      ])),
    },
  };
};

export default Test;
