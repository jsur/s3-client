import React, { useState } from "react";
import { AppBar, Toolbar, Button, MenuList, MenuListItem } from "react95";
import styled from "styled-components";
import Upload from "./Upload";

const Wrapper = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.desktopBackground};
  display: flex;
  justify-content: center;
`;

const Main = () => {
  const [open, setOpen] = useState(false);

  function windowOpen(url: string) {
    window.open(url);
  }

  return (
    <Wrapper>
      <AppBar style={{ top: "95%" }} onBlur={() => setOpen(false)}>
        <Toolbar style={{ justifyContent: "space-between" }}>
          <div style={{ position: "relative", display: "inline-block" }}>
            <Button
              onClick={() => setOpen(!open)}
              active={open}
              style={{ fontWeight: "bold" }}
            >
              Start
            </Button>
            {open && (
              <MenuList
                style={{
                  position: "absolute",
                  left: "0",
                  bottom: "100%",
                }}
                onClick={() => setOpen(false)}
              >
                <MenuListItem
                  onTouchEnd={() =>
                    windowOpen("https://github.com/jsur/s3-client")
                  }
                  onClick={() =>
                    windowOpen("https://github.com/jsur/s3-client")
                  }
                >
                  <span role="img" aria-label="💾">
                    💾
                  </span>
                  Frontend code
                </MenuListItem>
                <MenuListItem
                  onTouchEnd={() =>
                    windowOpen("https://github.com/jsur/deno-s3-api")
                  }
                  onClick={() =>
                    windowOpen("https://github.com/jsur/deno-s3-api")
                  }
                >
                  <span role="img" aria-label="💽">
                    💽
                  </span>
                  Deno backend code
                </MenuListItem>
              </MenuList>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <Upload />
    </Wrapper>
  );
};

export default Main;
