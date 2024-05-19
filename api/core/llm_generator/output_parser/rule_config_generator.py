from typing import Any

from langchain.schema import BaseOutputParser, OutputParserException

from core.llm_generator.prompts import RULE_CONFIG_GENERATE_TEMPLATE
from libs.json_in_md_parser import parse_and_check_json_markdown


class RuleConfigGeneratorOutputParser(BaseOutputParser):

    def get_format_instructions(self) -> str:
        return RULE_CONFIG_GENERATE_TEMPLATE

    def parse(self, text: str) -> Any:
        try:
            expected_keys = ["prompt", "variables", "opening_statement"]
            parsed = parse_and_check_json_markdown(text, expected_keys)
            if not isinstance(parsed["prompt"], str):
                raise ValueError("Expected 'prompt' to be a string.")
            if not isinstance(parsed["variables"], list):
                raise ValueError(
                    "Expected 'variables' to be a list."
                )
            if not isinstance(parsed["opening_statement"], str):
                raise ValueError(
                    "Expected 'opening_statement' to be a str."
                )
            return parsed
        except Exception as e:
            raise OutputParserException(
                f"Parsing text\n{text}\n of rule config generator raised following error:\n{e}"
            )

