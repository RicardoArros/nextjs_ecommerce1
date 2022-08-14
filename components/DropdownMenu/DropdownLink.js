import React from "react";

import Link from "next/link";
import { DropdownLinkWrap } from "./DropdownMenuStyled";

const DropdownLink = (props) => {
  let { href, children, ...rest } = props;

  return (
    <DropdownLinkWrap>
      <Link href={href}>
        <a {...rest}>{children}</a>
      </Link>
    </DropdownLinkWrap>
  );
};

export default DropdownLink;
