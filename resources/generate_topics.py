"""Generate the static browser manifest from the topics directory."""

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TOPICS_DIR = ROOT / "topics"
OUTPUT_FILE = Path(__file__).resolve().parent / "topics.json"
EXCLUDED_FOLDERS = {".git", ".vscode", "__pycache__", "node_modules"}


def build_folder(folder: Path) -> dict:
    """Return a folder node with relative paths, child folders, and files."""
    entries = sorted(folder.iterdir(), key=lambda item: item.name.casefold())
    folders = [
        build_folder(entry)
        for entry in entries
        if entry.is_dir()
        and entry.name.casefold() not in EXCLUDED_FOLDERS
        and not entry.name.startswith(".")
    ]
    files = [
        {"name": entry.name, "path": entry.relative_to(ROOT).as_posix()}
        for entry in entries
        if entry.is_file() and not entry.name.startswith(".")
    ]
    return {
        "name": folder.name,
        "path": folder.relative_to(ROOT).as_posix(),
        "folders": folders,
        "files": files,
    }


def main() -> None:
    if not TOPICS_DIR.is_dir():
        raise SystemExit(f"Topics directory not found: {TOPICS_DIR}")

    manifest = {
        "topics": [
            build_folder(folder)
            for folder in sorted(TOPICS_DIR.iterdir(), key=lambda item: item.name.casefold())
            if folder.is_dir()
            and folder.name.casefold() not in EXCLUDED_FOLDERS
            and not folder.name.startswith(".")
        ]
    }
    OUTPUT_FILE.write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Generated {OUTPUT_FILE} with {len(manifest['topics'])} topics.")


if __name__ == "__main__":
    main()
