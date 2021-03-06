import Head from "next/head";
import Image from "next/image";
import Link from "next/link"
import { Card, Row, Col, Container,Button } from "react-bootstrap";
import {
  EditorCards,
  ProductCards,
  ArticleCards,
  ReviewCards,
  PopularGroups,
  TrendingCards
} from "../components/cards";
import { PrimaryLayout } from "../layouts";
import { useGet } from "hooks/useAsync";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
export default function Home() {
  const [data, fetchData] = useGet();
  const [getData, setData] = useState();
  useEffect(() => {
    if (data.code == 200) {
      setData(data.data[0]);
    } else if ((data.code == 400) | (data.code == 500)) {
      router.push("/login");
    }
  }, [data, setData]);
  useEffect(() => {
    fetchData("0.1/wp");
  }, []);
  console.log(getData);
  return !getData ? (
    <>Loading...</>
  ) : (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PrimaryLayout>
        <Container>
          <Row>
            <Card
              className="col-sm-12 topFrame mt-3 mx-auto"
              style={{ borderRadius: "0" }}
            >
              <h1 className="text-center">Top Frame 970x50</h1>
            </Card>
            <Card
              className="col-sm-12 billboard mt-5 mx-auto"
              style={{ borderRadius: "0" }}
            >
              <h1 className="text-center my-auto">Billboard 970x250</h1>
            </Card>
          </Row>
          {/* Editor Section */}
          <div className="row my-5">
            <div className="col">
              <h3 className="fw-bolder">{"Editor's Choice"}</h3>
              <h5 className="text-muted text-capitalize fw-normal">
                Curated with love
              </h5>
            </div>
          </div>
          <EditorCards data={getData["editor's choice"]} />

          {/* End Editor Section */}
        </Container>
        <div
          className="mt-5 py-3"
          style={{ minHeight: "40vh", 
          backgroundColor: "#fddae0",
          backgroundImage:"url('/assets/images/girl.png')",
          backgroundRepeat:"no-repeat",
          backgroundPosition:"bottom left"
        }}
        >
          <Container>
            {/* Matches Product Section */}
            <Row>
              <Col xs="12" md="1">
              </Col>
              <Col xs="12" md="4" className="p-5 align-self-center">
                <h3 className="fw-bold">
                  Looking for products that are just simply perfect for you?
                </h3>
                <p className="fw-normal">
                  Here are some products that we believe match your skin, hair,
                  and body! Have we mentioned that they solve your concerns too?
                </p>
                <span className="d-flex mb-3 justify-content-md-end">
                <Button className="ms-md-auto text-capitalize px-4 py-2" variant="danger">See My Matches!</Button>
                </span>
              </Col>
              <Col xs="12" md="7">
                <ProductCards />
              </Col>
            </Row>

            {/* End Matches Product Section */}
          </Container>
        </div>

        <Container>
          <Card
            className="internalCampaign mt-5 mx-auto"
            style={{ borderRadius: "0" }}
          >
            <h1 className="text-center my-auto">
              Horizontal 970x250
              <br />
              (Internal campaign only)
            </h1>
          </Card>

          {/* Articles Section */}
          <div className="row my-5">
            <div className="col-12 col-md-10">
              <h3 className="fw-bolder">Latest Articles</h3>
              <h5 className="text-muted text-capitalize fw-normal">
                So you can make better purchase decision
              </h5>
            </div>
            <div className="col-12 col-md-2 align-self-end">
              <Link href="/">
              <h5 className="text-start text-md-end fw-normal text-decoration-none" style={{ color: "#db284e",cursor:'pointer' }}>
                {"See more >"}
              </h5>
              </Link>
            </div>
          </div>
          <ArticleCards data={getData["latest articles"]} />
          {/* End Articles Section */}

          {/* Review Section */}
          <Row>
            <Col xs="12" md={8}>
              <div className="row my-5">
                <div className="col-12 col-md-8">
                  <h3 className="fw-bolder">Latest Reviews</h3>
                  <h5 className="text-muted text-capitalize fw-normal">
                    So you can make better purchase decision
                  </h5>
                </div>
                <div className="col-12 col-md-4 align-self-end d-flex justify-content-md-end">
              <Link href="/">
              <h5 className="ms-md-auto fw-normal text-decoration-none" style={{ color: "#db284e",cursor:'pointer' }}>
                {"See more >"}
              </h5>
              </Link>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs="12" md="9">
              <ReviewCards data={getData["latest review"]} />
            </Col>
            <Card
              className="col-sm-12 mr2 mx-auto me-md-0 ms-md-auto"
              style={{ borderRadius: "0" }}
            >
              <h1 className="text-center my-auto">
                MR 2<br />
                300x250
              </h1>
            </Card>
          </Row>

          {/* End Review Section */}

          {/* Popular Group Section */}
          <div className="row my-5">
            <div className="col-12 col-md-8">
              <h3 className="fw-bolder">Popular Groups</h3>
              <h5 className="text-muted text-capitalize fw-normal">
                Where the beauty TALK are
              </h5>
            </div>
            <div className="col-12 col-md-4 align-self-end d-flex justify-content-md-end">
              <Link href="/">
              <h5 className="ms-md-auto fw-normal text-decoration-none" style={{ color: "#db284e",cursor:'pointer' }}>
                {"See more >"}
              </h5>
              </Link>
            </div>
          </div>
          <PopularGroups />
          {/* Popular Group Section */}

          {/* Videos Section */}
          <div className="row my-5">
            <div className="col-12 col-md-8">
              <h3 className="fw-bolder">Latest Videos</h3>
              <h5 className="text-muted fw-normal">Watch and learn, ladies</h5>
            </div>
            <div className="col-12 col-md-4 align-self-end d-flex justify-content-md-end">
              <Link href="/">
              <h5 className="ms-md-auto fw-normal text-decoration-none" style={{ color: "#db284e",cursor:'pointer' }}>
                {"See more >"}
              </h5>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-8">
                <img className="w-100" src="/assets/images/video-1.png"/>
              </div>
            <div className="col-12 col-md-4">
              <div className="d-flex flex-column">
                <img className="mb-3 h-100" src="/assets/images/video-2.png"/>
                <img className="h-100" src="/assets/images/video-3.png"/>
              </div>
              </div>
          </div>
          {/* End Videos Section */}

          {/* Trending Section */}
          <div className="row my-5">
            <div className="col-12">
              <h3 className="fw-bolder">Trending This Week</h3>
              <h5 className="text-muted fw-normal">
                See our weekly most reviewed products
              </h5>
            </div>
          </div>
          <Row>
            <Col>
              <TrendingCards />
            </Col>
          </Row>
          {/* End Trending Section */}

          {/* Top Brands Section */}
          <div className="row my-5">
            <div className="col-12 col-md-8">
              <h3 className="fw-bolder">Top Brands</h3>
              <h5 className="text-muted fw-normal">We all know and love</h5>
            </div>
            <div className="col-12 col-md-4 align-self-end d-flex justify-content-md-end">
              <Link href="/">
              <h5 className="ms-md-auto fw-normal text-decoration-none" style={{ color: "#db284e",cursor:'pointer' }}>
                {"See more >"}
              </h5>
              </Link>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row my-5 justify-content-center">
            <Col xs="12" md="2" className="d-flex align-items-center justify-content-center mb-3">
              <img
                width="80"
                className="img-fluid"
                src="/assets/images/nivea.png"
              />
            </Col>
            <Col xs="12" md="2" className="d-flex align-items-center justify-content-center mb-3">
              <img
                width="150"
                className="img-fluid"
                src="/assets/images/the-ordinary.png"
              />
            </Col>
            <Col xs="12" md="2" className="d-flex align-items-center justify-content-center mb-3">
              <img
                width="80"
                className="img-fluid"
                src="/assets/images/the-body-shop.png"
              />
            </Col>
            <Col xs="12" md="2" className="d-flex align-items-center justify-content-center mb-3">
              <img
                width="150"
                className="img-fluid"
                src="/assets/images/sk2.jpg"
              />
            </Col>
            <Col xs="12" md="2" className="d-flex align-items-center justify-content-center mb-3">
              <img
                width="150"
                className="img-fluid"
                src="/assets/images/maybeline.png"
              />
            </Col>
            <Col xs="12" md="2" className="d-flex align-items-center justify-content-center mb-3">
              <img
                width="150"
                className="img-fluid"
                src="/assets/images/innisfree.jpg"
              />
            </Col>
          </div>
          <div className="row my-5">
            <div className="col-12">
              <h3 className="fw-bolder">
                Female Daily - Find everything you want to know about beauty on
                Female Daily
              </h3>
              <h5 className="fw-normal text-dark">
                Product Reviews, Tips & Tricks, Expert and Consumer Opinions,
                Beauty Tutorials, Discussions, Beauty Workshops, anything! We
                are here to be your friendly solution to all things beauty,
                inside and out!
              </h5>
            </div>
          </div>
          {/* End Top Brands Section */}
        </Container>
      </PrimaryLayout>
    </>
  );
}
