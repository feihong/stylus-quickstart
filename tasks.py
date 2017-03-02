import subprocess
import signal
import contextlib
from invoke import task


@task
def serve(ctx):
    with run_child_process('gulp watch'):
        run('python -m http.server')


def run(cmd):
    shell = isinstance(cmd, str)
    subprocess.call(cmd, shell=shell)


@contextlib.contextmanager
def run_child_process(cmd):
    proc = subprocess.Popen(cmd, shell=True)
    yield
    proc.send_signal(signal.SIGINT)
