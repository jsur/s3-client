import React, { useState } from "react";
import { AppBar, Toolbar, Button, MenuList, MenuListItem } from "react95";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.desktopBackground};
`;

const Upload = () => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <AppBar onBlur={() => setOpen(false)}>
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
                  top: "100%",
                }}
                onClick={() => setOpen(false)}
              >
                <MenuListItem
                  onClick={() =>
                    window.open("https://github.com/jsur/s3-client")
                  }
                >
                  <span role="img" aria-label="💾">
                    💾
                  </span>
                  Code for this web app
                </MenuListItem>
                <MenuListItem
                  onClick={() =>
                    window.open("https://github.com/jsur/deno-s3-api")
                  }
                >
                  <span role="img" aria-label="💽">
                    💽
                  </span>
                  Code for Deno backend
                </MenuListItem>
              </MenuList>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </Wrapper>
  );
};

export default Upload;
