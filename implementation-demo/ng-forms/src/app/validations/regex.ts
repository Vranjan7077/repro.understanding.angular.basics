export class Regex {
  public static number_regex = /^[0-9]*$/;
  public static decimal_regex = /^(0|[1-9]\d*)(\.\d+)?$/;
  public static email_regex =
    /^\s*(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,63}))\s*$/;
  public static name_regex = '^[a-zA-Z0-9]*[a-zA-Z]+[a-zA-Z0-9]*$';
  public static zipPattern = /^[a-zA-Z0-9\s]{0,10}$/;
  public static countryCode = /^(\+|\d)[0-9]{7,16}$/;
  public static customSpaceValidator = /^[^\s].([A-Za-z]+\s)*[A-Za-z]+$/;
}
