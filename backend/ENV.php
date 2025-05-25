<?php

class ENV
{
  protected $path;

  public function __construct(string $path)
  {
    if (!file_exists($path)) {
      throw new \InvalidArgumentException(sprintf('Файл переменных среды %s не найден', $path));
    }
    $this->path = $path;
  }

  public function load(): void
  {
    if (!is_readable($this->path)) {
      throw new \RuntimeException(sprintf('Файл %s не может быть прочтен', $this->path));
    }
    $this->parse(file($this->path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES));
  }

  private function parse(array $lines): void
  {
    foreach ($lines as $line) {
      if (str_starts_with(trim($line), '#')) {
        continue;
      }
      list($name, $value) = $this->explodeLine($line);
      if (!array_key_exists($name, $_ENV)) {
        putenv(sprintf('%s=%s', $name, $value));
        $_ENV[$name] = $value;
      }
    }
  }

  private function explodeLine(string $line): array
  {
    return array_map(fn ($str) => trim(strtok($str, '#')), explode('=', $line, 2));
  }
}
