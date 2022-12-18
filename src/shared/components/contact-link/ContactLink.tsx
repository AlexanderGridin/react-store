import "./ContactLink.css";

export enum ContactLinkType {
  Tel = "Tel",
  Email = "Email",
}

interface ContactLinkProps {
  type: ContactLinkType;
  value: string;
}

const ContactLink = ({
  type = ContactLinkType.Tel,
  value = "",
}: ContactLinkProps): JSX.Element => {
  return (
    <a className="ContactLink" href={`${getLinkPrefix(type)}${value}`}>
      {value}
    </a>
  );
};

export default ContactLink;

const getLinkPrefix = (type: ContactLinkType): string => {
  const { Tel, Email } = ContactLinkType;

  switch (type) {
    case Tel:
      return "tel:";

    case Email:
      return "email:";

    default:
      return "";
  }
};
