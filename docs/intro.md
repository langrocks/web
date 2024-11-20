---
sidebar_position: 1
title: Introduction
sidebar_label: Introduction
---

Langrocks is a powerful collection of tools designed for working with Large Language Models (LLMs). It provides various utilities to enhance your LLM agents with web browsing, computer control, and file operation capabilities.

## Installation

You can install Langrocks using pip:

```bash
pip install -U langrocks
```

**Prerequisites**: Make sure you have Docker installed on your system before proceeding.

## Getting started

To start using Langrocks, run the following command:

```bash
langrocks
```

This will initialize the necessary containers and start the Langrocks server, which by default runs at `localhost:3000`.

## Core Features

### 1. Web Browser Integration

The Web Browser tool allows you to programmatically navigate websites, extract information, capture screenshots, and more:

```python
from langrocks.client.web_browser import WebBrowser
from langrocks.common.models.web_browser import WebBrowserCommand, WebBrowserCommandType

with WebBrowser("localhost:3000", capture_screenshot=True, html=True) as web_browser:
    # Navigate to a webpage
    content = web_browser.run_commands([
        WebBrowserCommand(
            command_type=WebBrowserCommandType.GOTO,
            data="https://www.google.com"
        ),
        WebBrowserCommand(
            command_type=WebBrowserCommandType.WAIT,
            selector="body"
        )
    ])

    # Extract content
    text = web_browser.get_text()
    html = web_browser.get_html()
    images = web_browser.get_images()
```

### 2. Computer Control

The Computer tool enables remote computer control through mouse and keyboard operations, particularly useful for models like Anthropic's Claude:

```python
from langrocks.client.computer import Computer
from langrocks.common.models.computer import ComputerCommand, ComputerCommandType

with Computer("localhost:3000", interactive=True) as computer:
    print(computer.get_remote_viewer_url())
    content = computer.run_commands([
        ComputerCommand(command_type=ComputerCommandType.COMPUTER_KEY, data="ctrl+l"),
        ComputerCommand(command_type=ComputerCommandType.COMPUTER_WAIT, data="1"),
        ComputerCommand(command_type=ComputerCommandType.COMPUTER_TYPE, data="https://www.google.com"),
        ComputerCommand(command_type=ComputerCommandType.COMPUTER_WAIT, data="1"),
        ComputerCommand(command_type=ComputerCommandType.COMPUTER_KEY, data="Return"),
        ComputerCommand(command_type=ComputerCommandType.COMPUTER_TERMINATE),
    ])
```

### 3. File Operations

The File Operations tool facilitates file format conversions:

```python
from langrocks.client.files import FileOperations
from langrocks.common.models.files import FileMimeType

with FileOperations("localhost:3000") as fops:
    # Convert file
    response = fops.convert_file(
        data=your_file_data,
        filename="document.tex",
        input_mime_type=FileMimeType.LATEX,
        output_mime_type=FileMimeType.PDF,
        options=["-V", "geometry:margin=0.5in"],
    )
```

## Next Steps

Explore the documentation further to learn about:
- Advanced configuration options
- API reference
- Best practices
- Integration examples
- Troubleshooting guides
