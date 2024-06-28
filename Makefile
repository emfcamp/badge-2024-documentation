lint-markdown:
	markdownlint -c .markdownlint.yaml docs/**/*.md

lint-py:
	flake8-markdown "docs/**/*.md"

lint: lint-markdown lint-py